"use client"
import React from 'react';
import { useParams, useRouter } from "next/navigation";
import teamData from '@/components/data/team-data';
import TeamSingle from '@/components/pages/teams/team-single';

const TeamMembers = () => {
    const params = useParams();
    const teamDetails = teamData.find((team) => team.id === params.id);
    const router = useRouter();
    if (!teamDetails) {
        return router.push("/404-error");
    }
    return (
        <>
            <TeamSingle teamDetails={teamDetails} />
        </>
    );
};

export default TeamMembers;
