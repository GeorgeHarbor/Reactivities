import React from 'react';
import {Image, Card, Button} from "semantic-ui-react";
import {useStore} from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";


const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity: activity,toggleForm, cancelSelectedActivity} = activityStore;

    if(!activity) return <LoadingComponent content={'asd'}/>;
    return(
        (
            <Card fluid>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>
                        <span>{activity.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths={2}>
                        <Button onClick={() => toggleForm(activity.id)} basic color={'blue'} content={'Edit'}/>
                        <Button onClick={() => cancelSelectedActivity()} basic color={'grey'} content={'Cancel'}/>
                    </Button.Group>
                </Card.Content>
            </Card>
        )
    )
};

export default ActivityDetails;