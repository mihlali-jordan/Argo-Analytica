import React from 'react'
import {Sentiment} from './Sentiment'
import '../tailwind.css'

export const SentimentSummary = () => {
    return (
        <div className="flex flex-col w-1/5">
            <h1 className="text-white text-2xl">Sentiment</h1>
            <Sentiment mood="meh" />
        </div>
    )
}
