'use client';
import React, { useState } from 'react';
import styles from './textStatisticsTools.module.css';

export default function TextStatisticsTools() {
    const [text, setText] = useState('');
    const charCount = text.length;
    const wordCount = text.split(' ').filter(word => word.trim() !== '').length;
    // const wordCount2 = text.trim().split(/\s+/).length
    const readingTime = (wordCount / 200).toFixed(2) + ' minutes';
    return (
        <div className={styles.container}>
            <h1>Text Statistics Tool</h1>
            <textarea
                placeholder='Enter your text here...'
                value={text}
                type='text'
                onChange={(e) => setText(e.target.value)}
                className={styles.textarea}
            ></textarea>
            <div className={styles.stats}>
                <p><strong>CHARACTERS: </strong> {charCount}</p>
                <p><strong>WORDS: </strong> {wordCount}</p>
                <p><strong>READING TIME: </strong> {readingTime}</p>
            </div>
        </div>
    )

}