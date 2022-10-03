<template>
  <div class="rate-container">
    <div class="rate-sticky">
      <div class="rate-tips" v-show="config.tips">
        温馨提示：{{ config.tips }}
      </div>
      <div class="rate-control">
        <span
          class="rate-control-item"
          v-for="(item, index) in filters"
          :key="index"
          @click="showDialog(index)"
        >
          <span>{{ unite[index] | fieldName(item.fields) }}</span>
          <!-- <img alt="" src="./img/rate_down.png" /> -->
        </span>
        <div class="rate-dialog" v-if="isShowDialog">
          <span
            v-for="(item, index) in filters[checkingIndex].fields"
            :key="index"
            @click="onSelected(index)"
          >
            {{ item.name }}
            <!-- <img
              alt=""
              v-show="item.value == unite[checkingIndex]"
              src="./img/rate_checked.png"
            /> -->
          </span>
          <div
            class="triangle_border_up"
            :style="{ left: positionX + '%' }"
          ></div>
        </div>
      </div>
      <div class="rate-box-top">
        <span>投保年龄</span>
        <span v-if="!column">保费</span>
        <template v-else>
          <span v-for="(item, index) in column.fields" :key="index">{{
            item.name
          }}</span>
        </template>
      </div>
    </div>
    <div class="rate-box" @click="isShowDialog = false">
      <div class="rate-box-item" v-for="item in range" :key="item.rowKey">
        <span>{{ item.rowKey }}</span>
        <span v-for="(item, index) in item.rowData" :key="index">{{
          item | formatMoney
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 是否为空
 * @param {any} o 待判断对象
 */
function isEmpty(o) {
  return (
    !o ||
    o == undefined ||
    0 == "undefined" ||
    (o.constructor == Object && JSON.stringify(o) == "{}")
  );
}
export default {
  name: "RateList",
  model: {
    prop: "unite",
    event: "change",
  },
  props: {
    //费率表配置
    config: {
      type: Object,
      default: function () {
        return {
          //顶部提示语
          tips: "",
          //维度
          dimensions: [],
          //作为列表项
          inline: "",
          //表数据
          data: {},
        };
      },
    },
    //维度可选项的交集
    unite: "",
    //维度项条件
    bizKeys: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      //版式
      schema: "",
      //当前展示弹框对应筛选项索引
      checkingIndex: 0,
      //是否展示弹窗
      isShowDialog: false,
    };
  },
  filters: {
    //格式化金额
    formatMoney,
    //获取维度名称
    fieldName(value, fields) {
      const i = fields.findIndex((field) => field.value == value);
      return i != -1 ? fields[i].name : "";
    },
  },
  mounted() {},
  computed: {
    //顶部筛选维度数组
    filters() {
      let array = [...this.config.dimensions];
      this.config.inline !== "" && array.splice(this.config.inline, 1);
      return array;
    },
    //作为列表项的维度
    column() {
      return this.config.dimensions[this.config.inline];
    },
    //筛选项数据索引
    dataIndex() {
      //unite 和 filter 初始值为空
      if (!this.unite || this.filters.length == 0) {
        return 0;
      } else {
        return this.unite.split("").reduce((result, item, index) => {
          return (result +=
            item * (this.filters[index] ? this.filters[index].weight : 0));
        }, 0);
      }
    },
    positionX() {
      return (
        (this.checkingIndex * 100) / this.filters.length +
        100 / this.filters.length / 2
      );
    },
    //列表数据
    range() {
      if (isEmpty(this.config.data)) return [];
      let ret = [];
      let indexArr = isEmpty(this.column)
        ? [this.dataIndex]
        : this.column.fields.map((field) => {
            return this.dataIndex + field.value * this.column.weight;
          });
      const rowKeys = Object.keys(this.config.data);
      for (const rowKey of rowKeys) {
        const rowData = indexArr
          .map((index) => {
            return this.config.data[rowKey][index];
          })
          .filter((item) => !!item);
        if (rowData.length > 0) {
          ret.push({
            rowKey,
            rowData,
          });
        }
      }
      return ret;
    },
  },
  watch: {
    //关联业务因子改变时，修改维度项
    bizKeys: {
      handler: function (bizKeys = {}) {
        let str = "";
        //赋予初值
        if (!this.unite && this.config.dimensions.length > 0) {
          str = new Array(this.config.dimensions.length).fill("0").join("");
        } else {
          str = this.unite;
        }
        this.filters.forEach((item, index) => {
          Object.keys(bizKeys).forEach((key) => {
            if (item.biz_key === key) {
              const i = item.fields.findIndex(
                (field) => field.biz_key === bizKeys[key]
              );
              i != -1 && (str = changeStr(str, index, item.fields[i].value));
            }
          });
        });
        this.$emit("change", str);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    showDialog(index) {
      this.isShowDialog = true;
      this.checkingIndex = index;
    },
    onSelected(index) {
      this.$emit(
        "change",
        changeStr(
          this.unite,
          this.checkingIndex,
          this.filters[this.checkingIndex].fields[index].value
        )
      );
      this.isShowDialog = false;
    },
  },
};
/**
 * 按指定精度格式化小数
 * @param {number} number 待格式化数字
 * @param {number} precision 精度
 * @returns
 */
function toFixed(number, precision) {
  const val = Math.round(Math.abs(precision));
  precision = isNaN(val) ? 2 : precision;
  const power = Math.pow(10, precision);
  return (Math.round((number + 1e-8) * power) / power).toFixed(precision);
}
/**
 * 格式化金额
 * @param {number} number 待格式化金额
 * @param {number} precision 小数位精度
 * @param {string} symbol 钱币标识
 * @returns
 */
function formatMoney(number, { precision = 2, symbol = "￥" } = {}) {
  if (number === undefined || number === null || number === "" || isNaN(number))
    return number;
  const negative = number < 0 ? "-" : "";
  const [integer, decimal] = toFixed(Math.abs(number), precision).split(".");
  const mod = integer.length > 3 ? integer.length % 3 : 0;
  return (
    symbol +
    negative +
    (mod ? integer.substr(0, mod) + "," : "") +
    integer.substr(mod).replace(/(\d{3})(?=\d)/g, "$1,") +
    (decimal ? "." + decimal : "")
  );
}
/**
 * 修改字符串指定位置为指定字符
 */
function changeStr(str = "", index = 0, char) {
  let array = str.split("");
  array[index] = char;
  return array.join("");
}
</script>

<style lang="scss" scoped>
.rate-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}
.rate-sticky {
  position: sticky;
  top: 0px;
  left: 0px;
  width: 100%;
  border-bottom: 1px solid #ddd;

  .rate-tips {
    width: 100%;
    height: 72px;
    font-size: 24px;
    line-height: 72px;
    text-align: center;
    box-sizing: border-box;
    background-color: #ff6600;
    color: #fff;
  }
  .rate-control {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background-color: #fff;
    color: #ff6600;
    position: relative;

    .rate-control-item {
      flex: 1;
      font-size: 28px;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      width: 0;

      img {
        width: 16px;
        height: 10px;
        margin-left: 6px;
      }
    }
  }

  .rate-dialog {
    position: absolute;
    z-index: 3;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #ff6600;
    left: 0;
    top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: flex;
      box-sizing: border-box;
      height: 90px;
      align-items: center;
      font-size: 28px;
      color: #333;
      width: calc(100% - 60px);
      flex-shrink: 0;

      img {
        width: 36px;
        height: 24px;
        margin-left: 12px;
      }
    }

    span:first-child {
      border-bottom: 1px solid #ddd;
      background-color: #fff;
    }

    .triangle_border_up {
      width: 22px;
      height: 22px;
      border: 1px solid #ff6600;
      background-color: #fff;
      position: absolute;
      z-index: -2;
      transform: translate(-50%, 50%) rotate(45deg);
      top: -22px;
      transition: left 0.3s ease;
    }
  }

  .rate-box-top {
    flex-shrink: 0;
    font-size: 28px;
    font-weight: 500;
    color: #333;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 1px solid #ddd;
    background-color: #fff;

    span {
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
      width: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

.rate-box {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  border-top: none;

  .rate-box-item {
    flex-shrink: 0;
    font-size: 26px;
    font-weight: 400;
    color: #666;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;

    &:nth-child(odd) {
      background-color: #f7f7f7;
    }

    span {
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
      width: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
