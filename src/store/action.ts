/**
 * 任务派发机制
 */

export default {
  async addCount(ctx: { commit: (arg0: string) => void }) {
    ctx.commit("addCount");
  },
};
