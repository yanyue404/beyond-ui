# banner 轮播组件

### 代码

```html
<Banner class="appraise-banner" :data="bannerImages" @change="bannerChange" />
```

## API

### props

| 参数            | 说明            | 类型                                      | 默认值  | 是否必选 |
| --------------- | --------------- | ----------------------------------------- | ------- | -------- |
| wrapWidth       | 可视区的宽度    | String                                    | 100%    | 否       |
| itemWidth       | item 的宽度     | String                                    | 100%    | 否       |
| itemSpace       | item 之间的间隔 | String                                    | 0       | 否       |
| bannerHeight    | 表示的值        | String                                    | 4.22rem | 否       |
| data            | banner 图片配置 | Array: [{ src: String, videoSrc: String}] | []      | 否       |
| videoFullScreen | 关闭视频按钮    | Boolean                                   | false   | 否       |
| iconTop         | icon 距顶高度   | String                                    | 0.25rem | 否       |
| iconRight       | icon 距右高度   | String                                    | 0rem    | 否       |

### events

| 名称   | 说明            | 参数               | 参数类型 |
| ------ | --------------- | ------------------ | -------- |
| change | banner 列表改变 | 显示的 banner 索引 | Number   |
