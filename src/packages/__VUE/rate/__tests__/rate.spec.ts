import { mount } from '@vue/test-utils';
import Rate from '../index.vue';
import Icon from '../../icon/index.vue';

test('base rate', () => {
  const wrapper = mount(Rate);
  const rate = wrapper.find('.miner-rate');
  expect(rate.exists()).toBe(true);
});
test('should have rate  when v-model', () => {
  const wrapper = mount(Rate, { props: { modelValue: 4 } });
  const rate = wrapper.findAll('.miner-rate-item__icon--disabled');
  expect(rate.length).toBe(1);
});
test('should have rate  when v-model', () => {
  const wrapper = mount(Rate, {
    props: { count: 10, iconSize: 20, activeColor: 'red' }
  });
  const rate = wrapper.findAll('.miner-rate-item');
  expect(rate.length).toBe(10);

  const i = wrapper.find('.miner-rate-item__icon');
  expect(i.attributes().size).toBe('20');
});
test('should have click', async () => {
  const wrapper = mount(Rate);
  const rate = wrapper.findAll('.miner-rate-item');
  await rate[3].trigger('click');
  setTimeout(() => {
    const rateDis = wrapper.findAll('.miner-rate-item__icon--disabled');
    expect(rateDis.length).toBe(2);
    expect((wrapper.emitted('change') as any)[0][0]).toEqual('3');
  }, 200);
});
test('should have disabled', async () => {
  const wrapper = mount(Rate, { props: { disabled: true, modelValue: 4 } });
  const rate = wrapper.findAll('.miner-rate-item');
  await rate[1].trigger('click');
  setTimeout(() => {
    const rateDis = wrapper.findAll('.miner-rate-item__icon--disabled');
    expect(rateDis.length).toBe(1);
  }, 200);
});
test('should have readonly', async () => {
  const wrapper = mount(Rate, { props: { readonly: true, modelValue: 4 } });
  const rate = wrapper.findAll('.miner-rate-item');
  await rate[1].trigger('click');
  setTimeout(() => {
    const rateDis = wrapper.findAll('.miner-rate-item__icon--disabled');
    expect(rateDis.length).toBe(1);
  }, 200);
});
