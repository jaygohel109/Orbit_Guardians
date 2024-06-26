import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Content, Sidebar, Option, ContentContainer } from './PlanetSectionStyles';
import MedicalResources from './HealthResources';
import MentalHealthSupport from './MentalHealthSupport';
import HealthTips from './HealthTips';
import HealthProfessionals from './HealthProfessionals';

const PlanetSection = ({ planetData }) => {
    const [currentTab, setCurrentTab] = useState('MedicalResources');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const checkWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', checkWindowWidth);

        return () => {
            window.removeEventListener('resize', checkWindowWidth);
        };
    }, []);

    const renderContent = () => {
        switch (currentTab) {
            case 'MedicalResources':
                return <MedicalResources />;
            case 'MentalHealthSupport':
                return <MentalHealthSupport />;
            case 'HealthTips':
                return <HealthTips />;
            case 'HealthProfessionals':
                return <HealthProfessionals />;
            default:
                return <MedicalResources />;
        }
    };

    return (
        <Section>
            <Container>
                <Sidebar>
                    <Option onClick={() => setCurrentTab('MedicalResources')}>Medical Resources</Option>
                    <Option onClick={() => setCurrentTab('MentalHealthSupport')}>Mental Health Support</Option>
                    <Option onClick={() => setCurrentTab('HealthTips')}>Tips for Staying Healthy</Option>
                    <Option onClick={() => setCurrentTab('HealthProfessionals')}>Health Professional Info</Option>
                </Sidebar>
                <ContentContainer>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        {renderContent()}
                    </motion.div>
                </ContentContainer>
            </Container>
        </Section>
    );
};

export default PlanetSection;
