import React from 'react'

const TypeWriter = ({ tracker }) => {
  
  return (
    <div className="py-4">
      <h1
        ref={tracker}
        className="my-4 border-2 px-2 py-4 shadow-md text-2xl text-cyan-900 rounded-md"
        data-type-max="100"
        data-type-min="400"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis eligendi
        voluptates ipsa molestiae cum, dolore incidunt illo corporis,
        necessitatibus doloribus, deserunt ratione exercitationem quibusdam
        animi harum tempore dolorem est natus laboriosam obcaecati veniam iusto
        autem excepturi esse. Alias aperiam nesciunt veniam autem culpa vero.
        Ullam temporibus beatae maxime consequatur minus.
      </h1>
     {/*  <h2
        ref={tracker}
        className="my-4 border-2 px-2 py-4 shadow-md text-xl text-yellow-900 rounded-md"
        data-type-max="0"
        data-type-min="75"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odio
        tenetur dicta voluptatum dolore commodi odit, a cum vero nisi veritatis
        quibusdam harum, inventore at facilis ab eius optio vel laborum
        laudantium quidem cumque. Inventore, amet? Perferendis odit
        reprehenderit iusto?
      </h2>
      <h3
        ref={tracker}
        className="my-4 border-2 px-2 py-4 shadow-md text-lg text-pink-900 rounded-md"
        data-type-max="100"
        data-type-min="300"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error laborum
        possimus labore voluptate assumenda repellat provident? Voluptatem quod
        eum optio atque, ad asperiores debitis ratione ex officia magni.
        Voluptatum, recusandae.
      </h3>
      <h4
        ref={tracker}
        className="my-4 border-2 px-2 py-4 shadow-md text-md   text-green-900 rounded-md"
        data-type-max="50"
        data-type-min="200"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        neque odit eligendi repellat voluptas consequatur sapiente provident
        suscipit maxime architecto.
      </h4> */}
    </div>
  )
}

export default TypeWriter