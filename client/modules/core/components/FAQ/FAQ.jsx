import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import FAQBanner from '../FAQBanner/FAQBanner.jsx';

class FAQ extends React.Component {

    render() {
        return (
            <div>
                <FAQBanner />
                <div className="container">
                    <Accordion>
                        <Panel header="What is workswap?" eventKey="1">
                            Workswap is a platform to make it easy to find exchange of services with remote and local users.
                        </Panel>
                        <Panel header="What is an exchange of service?" eventKey="2">
                            An exchange of service is a agreement to do a task for another individual. In return they return the favor and complete work for you.
                        </Panel>
                        <Panel header="What is an offer?" eventKey="3">
                            An offer is what a user on the workswap platform is willing to do in exchange for your work.
                        </Panel>
                        <Panel header="What if my offer or exchange isn't fulfilled?" eventKey="4">
                            Customer satisfaction is our number one concern. If a user doesn't fulfil their part of the agreement we will handle it on a personal level and reach out to the user. The user's account will be suspended until the situation is resolved. In the future we have plans to implement a resolution center to streamline this process and ensure our customers are confident and happy with the platform.
                        </Panel>
                        <Panel header="What if I am not happy with what I got in an exchange?" eventKey="5">
                            We recommend being as clear and specific before agreeing on an exchange to help elevate this from happening. However, since the world isn't rainbows and butterflies, if you feel unhappy with an exchange please contact support and we will try our very best to mend the situation.
                        </Panel>
                    </Accordion>
                </div>
            </div>
        );
    }
}


export default FAQ;