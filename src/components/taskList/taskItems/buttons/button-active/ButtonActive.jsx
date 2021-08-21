import React from 'react';
import PropTypes from 'prop-types';
import {setActiveTaskDispatcher} from '../../../../../store/dispatchers/dispatcher';

export const ButtonActive = ({id, active}) => {
    const buttonText = (active === false ? 'активировать задачу' : 'завершить задачу');
    return (
        <div className='btn' onClick={() => setActiveTaskDispatcher(id)}>
            <svg enableBackground="new 0 0 512.063 512.063" viewBox="0 0 512.063 512.063"
                 xmlns="http://www.w3.org/2000/svg"><g><g>
                <ellipse cx="256.032" cy="256.032" fill="#00df76" rx="255.949" ry="256.032"/>
                 </g><path d="m256.032 0c-.116 0-.231.004-.347.004v512.055c.116 0 .231.004.347.004 141.357 0
                 255.949-114.629 255.949-256.032s-114.592-256.031-255.949-256.031z" fill="#00ab5e"/><path
                d="m111.326 261.118 103.524 103.524c4.515 4.515 11.836 4.515 16.351 0l169.957-169.957c4.515-4.515
                4.515-11.836 0-16.351l-30.935-30.935c-4.515-4.515-11.836-4.515-16.351 0l-123.617 123.615c-4.515
                4.515-11.836 4.515-16.351 0l-55.397-55.397c-4.426-4.426-11.571-4.526-16.119-.226l-30.83 29.149c-4.732
                4.475-4.837 11.973-.232 16.578z" fill="#fff5f5"/><path d="m370.223
                147.398c-4.515-4.515-11.836-4.515-16.351 0l-98.187 98.187v94.573l145.473-145.473c4.515-4.515
                4.515-11.836 0-16.352z" fill="#dfebf1"/></g></svg>
        </div>);
};
ButtonActive.PropTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
};