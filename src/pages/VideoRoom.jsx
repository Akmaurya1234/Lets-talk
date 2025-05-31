import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

function VideoRoom() {
    const { roomID } = useParams();

    const myMeeting = async (element) => {
        const appID = 1390422547;
        const serverSecret = "20d1a496e20456887549b2ab103a6204";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "aditya maurya"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'copy link',
                    url: `http://localhost:5173/room/${roomID}`, // fixed
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}

export default VideoRoom;
