# Notify 消息通知

## 代码演示

### 基础用法

```html
<template>
  <demo-section>
    <demo-block title="基础用法">
      <cell :showIcon="true" :isLink="true" @click.native="notify1('通知内容')">
        <span slot="title">
          <label>基础用法</label>
        </span>
      </cell>
    </demo-block>
    <demo-block title="通知类型">
      <div>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="notify2('通知内容')"
        >
          <span slot="title">
            <label>主要通知</label>
          </span>
        </cell>
      </div>
      <div>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="notify3('成功通知')"
        >
          <span slot="title">
            <label>成功通知</label>
          </span>
        </cell>
      </div>
      <div>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="notify4('危险通知')"
        >
          <span slot="title">
            <label>危险通知</label>
          </span>
        </cell>
      </div>
      <div>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="notify5('警告通知')"
        >
          <span slot="title">
            <label>警告通知</label>
          </span>
        </cell>
      </div>
    </demo-block>
    <demo-block title="自定义样式">
      <div>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="cusBgNotify('自定义背景色和字体颜色')"
        >
          <span slot="title">
            <label>自定义背景色和字体颜色</label>
          </span>
        </cell>
      </div>
    </demo-block>
    <demo-block title="自定义时长">
      <div>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="timeNotify('自定义时间')"
        >
          <span slot="title">
            <label>自定义时长</label>
          </span>
        </cell>
      </div>
    </demo-block>
    <demo-block title="组件调用">
      <div>
        <cell :showIcon="true" :isLink="true" @click.native="showNotify">
          <span slot="title">
            <label>组件调用</label>
          </span>
        </cell>
        <notify :showPopup="show" type="success" msg="hello" duration="10000">
          <span>hello</span>
        </notify>
      </div>
    </demo-block>
    <demo-block title="修改默认配置">
      <div>
        <cell :showIcon="true" :isLink="true" @click.native="defaultNotify">
          <span slot="title">
            <label>更改所有Notify展示时长设置为5000毫秒</label>
          </span>
        </cell>
        <cell
          :showIcon="true"
          :isLink="true"
          @click.native="resetDefaultOptions"
        >
          <span slot="title">
            <label>恢复所有Toast提示默认配置</label>
          </span>
        </cell>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
  import cell from '../../cell';
  export default {
    components: {
      cell,
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      notify1(val) {
        this.$notify.text(val, {
          onClosed() {
            console.log('close');
          },
          onClick: () => {
            console.log('click');
          },
          onOpened: () => {
            console.log('opened');
          },
        });
      },
      notify2(val) {
        this.$notify.primary(val);
      },
      notify3(val) {
        this.$notify.success(val);
      },
      notify4(val) {
        this.$notify.danger(val);
      },
      notify5(val) {
        this.$notify.warn(val);
      },
      cusBgNotify(val) {
        this.$notify.text(val, {
          color: '#ad0000',
          background: '#ffe1e1',
        });
      },
      timeNotify(val) {
        this.$notify.text(val, {
          duration: 10000,
        });
      },
      showNotify() {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 200);
      },
      defaultNotify() {
        this.$notify.setDefaultOptions({
          duration: 5000,
        });
        this.$notify.text('将所有Notify提示展示时长设置为5000毫秒');
      },
      resetDefaultOptions() {
        this.$notify.resetDefaultOptions();
        this.$notify.text('恢复所有Notify提示默认配置');
      },
    },
  };
</script>
```
