import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlkhimiaModal from '../components/AlkhimiaModal.vue'

describe('AlkhimiaModal imageSrc', () => {
  it('returns correct path for alquimia', () => {
    const wrapper = mount(AlkhimiaModal, {
      props: { isOpen: true, typeKnowledge: 'alquimia' }
    })
    expect((wrapper.vm as any).imageSrc).toBe('../assets/images/albedo.png')
  })

  it('returns correct path for magia', () => {
    const wrapper = mount(AlkhimiaModal, {
      props: { isOpen: true, typeKnowledge: 'magia' }
    })
    expect((wrapper.vm as any).imageSrc).toBe('../assets/images/baton.png')
  })
})
