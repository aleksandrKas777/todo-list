import React from 'react';
import {setImportanceTaskDispatcher} from '../../../../../store/dispatchers/dispatcher';

export const ButtonImportance = ({id, importance}) => {

    const buttonText = (importance === false ? 'отметить как важное' : 'снять отметку как важное');
    return (
        <div className='btn' onClick={() => setImportanceTaskDispatcher(id)}>
            <svg viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg"><path d="m61.639 72h-49.278a10.361 10.361 0 0 1
                -9.267-14.995l24.638-49.277a10.362 10.362 0 0 1 18.536 0l24.638 49.277a10.361 10.361 0 0 1 -9.267
                14.995zm-24.639-68a8.211 8.211 0 0 0 -7.479 4.622l-24.638 49.278a8.361 8.361 0 0 0 7.478
                12.1h49.278a8.361 8.361 0 0 0 7.478-12.1l-24.638-49.278a8.211 8.211 0 0 0 -7.479-4.622z"/><path
                d="m39.531 49.088h-5.062a1 1 0 0 1 -1-.975l-.586-23.526a1 1 0 0 1 1-1.025h6.234a1 1 0 0 1 1 1.025l-.587
                23.526a1 1 0 0 1 -.999.975zm-4.086-2h3.11l.536-21.526h-4.182z"/><path d="m37 61.4a4.25 4.25 0 1 1
                4.25-4.25 4.255 4.255 0 0 1 -4.25 4.25zm0-6.5a2.25 2.25 0 1 0 2.25 2.25 2.252 2.252 0 0 0
                -2.25-2.25z"/></svg>
        </div>);
};

