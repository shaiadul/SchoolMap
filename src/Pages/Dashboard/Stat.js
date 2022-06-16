import React from 'react';
import svg1 from '../../images/icons8-factory-50.png'
import svg2 from '../../images/icons8-delivery-50.png'
import svg3 from '../../images/icons8-attract-customers-48.png'
import CountUp from 'react-countup';

const Stat = () => {
    return (
        <div className='my-14 text-center'>
            <p className='lg:text-4xl text-1xl shadow-xl font-mono uppercase text-center text-secondary  font-bold my-11 border-green-600 rounded-full duration-200 inline-block p-4'>Revenue Summary OF the year</p>
            <div class="stats shadow grid lg:grid-cols-3 sm:grid-cols-1 gap-3 text-center mx-8">
                {/* sault no 01 */}
                <div class="stat">
                    <div class="stat-figure text-primary">
                        <img src={svg1} alt="" />
                    </div>
                    <div class="stat-title">Total Activities</div>
                    <div class="stat-value text-primary"><CountUp end={90} />% +</div>
                    <div class="stat-desc">46% more than last month</div>
                </div>
                {/* sault no 02 */}
                <div class="stat ">
                    <div class="stat-figure text-secondary">
                        <img src={svg2} alt="" />
                    </div>
                    <div class="stat-title">Successfully Carried</div>
                    <div class="stat-value text-secondary"><CountUp end={7} />k</div>
                    <div class="stat-desc">81% more than last month</div>
                </div>
                {/* sault no 03 */}
                <div class="stat ">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src={svg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value"><CountUp end={79} />%</div>
                    <div class="stat-title">Management Happiness</div>
                    <div class="stat-desc text-secondary">85% Ratting</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;