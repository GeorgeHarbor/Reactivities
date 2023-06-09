import React, {useEffect} from 'react';
import  {Grid} from "semantic-ui-react";
import {useStore} from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";


const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;

    const {id} = useParams();

    useEffect(() => {
            if(id) void loadActivity(id);
    }, [id, loadActivity]);



    if(loadingInitial || !activity) return <LoadingComponent content={'Loading activity...'}/>;
    return(
        (
            <Grid>
                <Grid.Column width={10}>
                    <ActivityDetailedHeader activity={activity}/>
                    <ActivityDetailedInfo activity={activity}/>
                    <ActivityDetailedChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <ActivityDetailedSidebar/>
                </Grid.Column>
            </Grid>
        )
    )
};

export default observer(ActivityDetails);