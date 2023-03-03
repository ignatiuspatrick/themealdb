import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TheMeal from '../../src/components/TheMeal'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TheMeal', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      pushSearchResult: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
      getters: {
        getMealsList: () => [],
      },
    })
  })

  it('displays warning label when search query is empty', () => {
    const wrapper = mount(TheMeal, { store, localVue })
    wrapper.setData({ query: '' })

    const searchButton = wrapper.find('.search-button')
    searchButton.trigger('click')

    const warningLabel = wrapper.find('.warning-label')
    expect(warningLabel.exists()).toBe(true)
  })

  it('dispatches pushSearchResult action when search query is not empty', async () => {
    const wrapper = mount(TheMeal, { store, localVue })
    wrapper.setData({ query: 'pasta' })

    const searchButton = wrapper.find('.search-button')
    await searchButton.trigger('click')

    expect(actions.pushSearchResult).toHaveBeenCalled()
  })

  it('displays no result message when API returns null result', async () => {
    const wrapper = mount(TheMeal, { store, localVue })
    wrapper.setData({ query: 'invalid query' })

    const searchButton = wrapper.find('.search-button')
    await searchButton.trigger('click')

    const noResultLabel = wrapper.find('.no-result-label')
    expect(noResultLabel.exists()).toBe(true)
  })

  it('renders meal cards when API returns valid result', async () => {
    const meals = [
      {
        idMeal: '1',
        strMeal: 'Spaghetti',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xxxyyy123.jpg',
        strCategory: 'Pasta',
        strArea: 'Italian',
        strInstructions: 'Cook the spaghetti and add sauce.',
      },
    ]
    const getters = {
      getMealsList: () => meals,
    }
    store = new Vuex.Store({
      actions,
      getters,
    })

    const wrapper = mount(TheMeal, { store, localVue })
    wrapper.setData({ query: 'spaghetti' })

    const searchButton = wrapper.find('.search-button')
    await searchButton.trigger('click')

    const mealCards = wrapper.findAll('.meal-card')
    expect(mealCards.length).toBe(1)
  })
})
