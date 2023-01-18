export const faqData = [
  {
    id: 1,

    header: 'What is LogRocket?',

    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 2,

    header: 'LogRocket pricing?',

    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 3,

    header: 'Where can I Find the Doc?',

    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 4,

    header: 'How do I cancel my subscription?',

    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },

  {
    id: 5,

    header: 'What are LogRocket features?',

    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
]

export function wait(ms = 500) {
  return  new Promise(resolve => setTimeout(resolve, ms))
  
}

export function getRandomBetween(min=100, max=300, randomNum) {
  return Math.floor(randomNum *(max - min) + min)
}