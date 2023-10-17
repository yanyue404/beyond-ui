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
          <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAYAAADlep81AAABMElEQVRIS73VPU4DMRCG4XcU5QCUkJaIiiMgSMFVCCAa4BxAEyWcBYqEcAoELVByAIgGrXcTJdqsf1d2tdLK9qPP9ozoGYcId8APXa5lxBcZh16xxy8PwA7KreiQOcqRMQjvCAN55DOHqcLMUPrV/q8F6AnldAXIhNJzeijTFaYM5LkA9VFegN1cqFoy5cbfCMdSfOkFByyY5kA1YjoMZMKbAeVCuTDlqa2NxqS6nKS+Ph9MDWRNKgHli9kKahsVgmkEtYUKxVhBqagYjBMUi4rFeIFCUSkYb5Avams7KCpwVfR8+uNGHXJNsNUp/pBabwrEBCXkrOgmxqprL3tTQDLL9YMSsqI24w06pvWpUaDGO5WQTFJClqSik2kFZJK6ZJ8F92bBDjcy5sP1OGz//wFaq9d6+us+uQAAAABJRU5ErkJggg==" />
        </span>
        <div class="rate-dialog" v-if="isShowDialog">
          <span
            v-for="(item, index) in filters[checkingIndex].fields"
            :key="index"
            @click="onSelected(index)"
          >
            {{ item.name }}
            <img
              alt=""
              v-show="item.value == unite[checkingIndex]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAqCAYAAADvczj0AAAEzUlEQVRoQ+WZW2wUZRSAv7Nbi+AFTPQBTHzRB40v+qSJYVsEgUSijZeCUQMS3Z1ytYokxqirD8Z7kKbtzoqaEESjVSMxoMGKij5AjGmMaRTwgoRWEQUkNGBxjpl/p6Slu/PP7G6oW/+Xptlz+b85/+Wc8wv/syHjlVdbuIAE0xhkl+QZHOIcd8C6mvM4wlqURQHkEYQV4rLe/39cAWuaSQhbUFIjVq7gIaQkx5fjBliXM4ETbAJml9im6yTPfeMCWLPU0cc7wE0lzyShS1xur3lgfYsk3WxEaQ49gBM4ksOtaWBVhAyvAQstt802pjFLsni1DZyhHWVJKKywk8nMkmc5WtOntGZ4DmWVJbI9JLleOjlU0/ewpnkSeNQS2V7qaZQ2fh8uV3NLWh1W4/GMJbJ7gJTk6T9drqaA1WEZHm0W2L0B7C/F5GoGWB0W47HOkh32BbA/lPooNQGsDgtQXkdJhCQWB1AaJM93YStgBLBJvA9zMdPYI1lO/hcqKU3ThPA2Sl3IfP4kyQzp5BvbnA2wZjmbPtYA6WDJ+BVGq7jmUh+zoQ5z8Ex+XB8S2b+AmeLyVZSJFoDTPA88WERhleR5IYqhastoCw14pvKZGGL7GAnm+FVQVP9DwP7FPKWokrBUXDqiGqyGnLZwLR5bUc4NsXecBDdKjk/i+BTNUk8/x0L2iH9U3Cs5Xo1juFxZdbgaz0AUD0DB8N8kaZJOtsT1U4hwhm0ojSH7xEO5W/JsjOsgjrwu5UoG+RS4MGQuJxGaJcd7cWwPyQ4t6csRdqCcH+oI5ovLu+U4sunoEi7jJJ8DU0M/PNwlLm/Y7JX6/dS1pA7X4fERcE6IsUGEJnHZXK7DYnqa5hJgO5i/pUZVttbIe9ihEWWz5WQ8jjBPXLqrAa1pE1Ef9lKLvWWSp71Sn6MyLU0zG2ETyoQQ4wMkmSudZqJlD13ORZzgM+CKUCPCQ+Kaq7PiUTS1VId5eGavnhXi4SgJZkmOneXMQu9nCgNsA66ywD4urikHqzJK5tLqcCvKm6EpnXDIFNgd9MSZTZDCbgWuseg9LXkejmPbJhtaPGiGO4ANoUk7HERoEJdemzP/d21lIgN8OKp3PFp5reRZGcVmHBlrtaQOi/BM0lFaVvjVlGUuu8OcR+gdF9SFl8mREUHjwESRtQKbqDhk8MhZ9tq+oLv/czE50zvupwvlZoudDUxlod9hjAIQVyYSsIHOsBI1FVXY+IkE0yXH/uFCmiVBv+kdz7fAdjGTBdLMP3FBospHBg4iHaWftIuJpOQlfjM6fu/Y4RWUeyywH6DcMvylLypEHLlYwEGkH0N5wjL5b6mjUdr5Q6P0juFjJjBP2jgRZ/LlyMYGDqCfQq3XxdfAF8AKy8fZjjJX8gyUAxBXpyxgA53mRaA1rsPT5HcwhRuGXgUqtBVJvWzgANpvDLRE8jRaqIdJzJA1HC5Tvyy1yoALj1l+63RxLO9Cb9BhPBhLrwrCFQGbKBeunPUod0aaj7CbJCnpMMnKGR8VAxvowhutn3ffZiHYSx3TpYN9Z5w0cFgV4GA/+5VVV8lXeGE/CVLSyY9jBev7rRpwsLz9huD7/jUzAko4EMB+P5awVQc+FekEj6DmVX4y0E2SB8ZyGQ//yP8Ch9ZkOizEgy8AAAAASUVORK5CYII="
            />
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
import { isEmpty, formatMoney } from '../utils';
/**
 * 修改字符串指定位置为指定字符
 */
function changeStr(str = '', index = 0, char) {
  const array = str.split('');
  array[index] = char;
  return array.join('');
}

export default {
  name: 'rate-list',
  filters: {
    // 格式化金额
    formatMoney,
    // 获取维度名称
    fieldName(value, fields) {
      const i = fields.findIndex((field) => field.value == value);
      return i != -1 ? fields[i].name : '';
    },
  },
  model: {
    prop: 'unite',
    event: 'change',
  },
  props: {
    // 费率表配置
    config: {
      type: Object,
      default() {
        return {
          // 顶部提示语
          tips: '',
          // 维度
          dimensions: [],
          // 作为列表项
          inline: '',
          // 表数据
          data: {},
        };
      },
    },
    // 维度可选项的交集
    unite: '',
    // 维度项条件
    bizKeys: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // 版式
      schema: '',
      // 当前展示弹框对应筛选项索引
      checkingIndex: 0,
      // 是否展示弹窗
      isShowDialog: false,
    };
  },
  computed: {
    // 顶部筛选维度数组
    filters() {
      const array = [...this.config.dimensions];
      this.config.inline !== '' && array.splice(this.config.inline, 1);
      return array;
    },
    // 作为列表项的维度
    column() {
      return this.config.dimensions[this.config.inline];
    },
    // 筛选项数据索引
    dataIndex() {
      // unite 和 filter 初始值为空
      if (!this.unite || this.filters.length == 0) {
        return 0;
      }
      return this.unite.split('').reduce((result, item, index) => {
        return (result +=
          item * (this.filters[index] ? this.filters[index].weight : 0));
      }, 0);
    },
    positionX() {
      return (
        (this.checkingIndex * 100) / this.filters.length +
        100 / this.filters.length / 2
      );
    },
    // 列表数据
    range() {
      if (isEmpty(this.config.data)) return [];
      const ret = [];
      const indexArr = isEmpty(this.column)
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
    // 关联业务因子改变时，修改维度项
    bizKeys: {
      handler(bizKeys = {}) {
        let str = '';
        // 赋予初值
        if (!this.unite && this.config.dimensions.length > 0) {
          str = new Array(this.config.dimensions.length).fill('0').join('');
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
        this.$emit('change', str);
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    showDialog(index) {
      this.isShowDialog = true;
      this.checkingIndex = index;
    },
    onSelected(index) {
      this.$emit(
        'change',
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
