"use client";

import { useParams } from 'next/navigation';
import React from 'react';
import TextEditor from '@/components/Document/document';

const DashboardPage: React.FC = () => {

    return (
        <div>
            <TextEditor />
        </div>
    );
};

export default DashboardPage;
