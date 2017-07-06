/**
 * Created by hasee on 2017/6/27.
 */
import Vue from 'vue';
import app from '../../src/App.vue';

describe('test App.vue', () => {
  // 描述要测试的最小单元
  it('组件加载后，title应该是Holle world', () => {

    // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
    let vm = new Vue(app).$mount();
    vm.geeting='Hello world'
    // 断言组件的title是否变为了'Hello world'
    expect(vm.greeting).toEqual('Hello world');
  });
});