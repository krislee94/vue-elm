/**
 * 事件派发机制
 * 1. 需要处理的state都可以在这里处理
 */

export default {
  addCount(state: { count: any }, payload: { count: any }) {
    console.log(payload);
    state.count = state.count++;
  },
};
