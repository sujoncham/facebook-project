import React from 'react';

const HomeLeft = () => {
    return (
        <div className='flex-1 w-64 shadow-xl bg-base-100'>
            <div>
                <div class="collapse">
                    <input type="checkbox" class="peer" /> 
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                    <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Click me to show/hide content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLeft;