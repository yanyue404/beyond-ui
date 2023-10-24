import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const add = () => {
      alert(111)
    };

    return () => {
      return <div>11111</div>;
    };
  },
});
