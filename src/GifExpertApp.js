import React, { useState } from 'react'
import { AddCategori } from './components/AddCategori'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategorias] = useState(['One Punch'])


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategori setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
