<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="wrap">
        <Table :columns="columns" :data="data">
          <template slot-scope="{ row, index }" slot="name">
            <input type="text" v-model="editName" v-if="editIndex === index" />
            <span v-else>{{ row.name }}</span>
          </template>
          <template slot-scope="{ row, index }" slot="age">
            <input type="text" v-model="editAge" v-if="editIndex === index" />
            <span v-else>{{ row.age }}</span>
          </template>
          <template slot-scope="{ row, index }" slot="address">
            <input
              type="text"
              v-model="editAddress"
              v-if="editIndex === index"
            />
            <span v-else>{{ row.address }}</span>
          </template>
        </Table>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name',
          slot: 'name',
        },
        {
          title: '年龄',
          key: 'age',
          slot: 'age',
        },
        {
          title: '出生日期',
          render: (h, { row, index }) => {
            let edit;

            // 当前行为聚焦行时
            if (this.editIndex === index) {
              edit = [
                h('input', {
                  domProps: {
                    value: row.birthday,
                  },
                  on: {
                    input: (event) => {
                      this.editBirthday = event.target.value;
                    },
                  },
                }),
              ];
            } else {
              const date = new Date(parseInt(row.birthday));
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();

              edit = `${year}-${month}-${day}`;
            }

            return h('div', [edit]);
          },
        },
        {
          title: '地址',
          key: 'address',
          slot: 'address',
        },
        {
          title: '操作',
          render: (h, { row, index }) => {
            if (this.editIndex === index) {
              return [
                h(
                  'button',
                  {
                    on: {
                      click: () => {
                        this.data[index].name = this.editName;
                        this.data[index].age = this.editAge;
                        this.data[index].birthday = this.editBirthday;
                        this.data[index].address = this.editAddress;
                        this.editIndex = -1;
                      },
                    },
                  },
                  '保存'
                ),
                h(
                  'button',
                  {
                    style: {
                      marginLeft: '6px',
                    },
                    on: {
                      click: () => {
                        this.editIndex = -1;
                      },
                    },
                  },
                  '取消'
                ),
              ];
            } else {
              return h(
                'button',
                {
                  on: {
                    click: () => {
                      this.editName = row.name;
                      this.editAge = row.age;
                      this.editAddress = row.address;
                      this.editBirthday = row.birthday;
                      this.editIndex = index;
                    },
                  },
                },
                '修改'
              );
            }
          },
        },
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '919526400000',
          address: '北京市朝阳区芍药居',
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '696096000000',
          address: '北京市海淀区西二旗',
        },
        {
          name: '李小红',
          age: 30,
          birthday: '563472000000',
          address: '上海市浦东新区世纪大道',
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '687024000000',
          address: '深圳市南山区深南大道',
        },
      ],
      editIndex: -1, // 当前聚焦的输入框的行数
      editName: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editAge: '', // 第二列输入框
      editBirthday: '', // 第三列输入框
      editAddress: '', // 第四列输入框
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  overflow-x: scroll;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(179, 177, 177);
  border-radius: 5px;
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136);
  border-radius: 5px;
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(100, 100, 100);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:active {
  background: rgb(68, 68, 68);
  border-radius: 5px;
}
</style>
