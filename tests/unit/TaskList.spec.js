import { mount } from '@vue/test-utils';
import TaskList from '../../src/components/TaskList.vue';
import { WithPinnedTasks } from '../../src/components/TaskList.stories';

test('renders pinned tasks at the start of the list', () => {
  const wrapper = mount(TaskList, {
    propsData: WithPinnedTasks.args,
  });
  const firstPinnedTask = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
  console.log("firstPinnedTask", firstPinnedTask);
  expect(firstPinnedTask).not.toBe(null);
});
