import { shallowMount } from '@vue/test-utils';
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('renders the Contact page', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.text()).toContain('Contact Us');
  });
});
