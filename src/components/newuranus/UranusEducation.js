import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const UranusEducation = () => {
    const [activeTab, setActiveTab] = useState('training');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const renderContent = () => {
        if (loading) {
            return <Loading>Loading...</Loading>;
        }

        switch (activeTab) {
            case 'training':
                return <TrainingModules />;
            case 'classes':
                return <OnlineClasses />;
            case 'resources':
                return <ResourceLibrary />;
            default:
                return null;
        }
    };

    return (
        <Container>
            <Header>
                <h1>Uranus - Education and Training</h1>
                <p>Offer educational resources and training programs for crisis management.</p>
            </Header>
            <Tabs>
                <Tab active={activeTab === 'training'} onClick={() => setActiveTab('training')}>Training Modules</Tab>
                <Tab active={activeTab === 'classes'} onClick={() => setActiveTab('classes')}>Online Classes</Tab>
                <Tab active={activeTab === 'resources'} onClick={() => setActiveTab('resources')}>Resource Library</Tab>
            </Tabs>
            <Content>
                {renderContent()}
            </Content>
        </Container>
    );
};

const TrainingModules = () => (
    <TrainingContainer>
        <Card>
            <h2>Module 1: Basic Crisis Management</h2>
            <VideoContainer>
                <iframe
                    src="https://www.youtube.com/embed/vmng99jeMBc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Module 1"
                ></iframe>
            </VideoContainer>
            <p>Learn the basics of crisis management with this introductory module.</p>
        </Card>
        <Card>
            <h2>Module 2: Advanced Crisis Strategies</h2>
            <VideoContainer>
                <iframe
                    src="https://www.youtube.com/embed/WzzLKQ3_lAI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Module 2"
                ></iframe>
            </VideoContainer>
            <p>Dive deeper into advanced strategies for handling crises effectively.</p>
        </Card>
        <Card>
            <h2>Module 3: Communication during Crisis</h2>
            <VideoContainer>
                <iframe
                    src="https://www.youtube.com/embed/bBGbqwTihC4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Module 3"
                ></iframe>
            </VideoContainer>
            <p>Understand the importance of communication during a crisis and learn best practices.</p>
        </Card>
    </TrainingContainer>
);

const OnlineClasses = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentClass, setCurrentClass] = useState(null);

    const classes = [
        { title: 'Webinar: Crisis Management 101', link: 'https://zoom.us/j/1234567890' },
        { title: 'Class: Handling Public Relations', link: 'https://zoom.us/j/0987654321' },
        { title: 'Workshop: Crisis Communication Skills', link: 'https://zoom.us/j/1122334455' },
    ];

    const openModal = (classInfo) => {
        setCurrentClass(classInfo);
        setShowModal(true);
    };

    const closeModal = () => {
        setCurrentClass(null);
        setShowModal(false);
    };

    return (
        <>
            <Card>
                <h2>Online Classes and Webinars</h2>
                <p>Join our online classes and webinars to learn from experts in crisis management.</p>
                <ClassList>
                    {classes.map((classInfo, index) => (
                        <ClassItem key={index} onClick={() => openModal(classInfo)}>
                            <h3>{classInfo.title}</h3>
                        </ClassItem>
                    ))}
                </ClassList>
            </Card>
            {showModal && (
                <Modal>
                    <ModalContent>
                        <h2>{currentClass.title}</h2>
                        <p>Click the link below to join the class:</p>
                        <a href={currentClass.link} target="_blank" rel="noopener noreferrer">Join Class</a>
                        <CloseButton onClick={closeModal}>Close</CloseButton>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

const ResourceLibrary = () => {
    const [expanded, setExpanded] = useState(null);
    const [search, setSearch] = useState("");

    const resources = [
        { title: "Article: Effective Crisis Response", content: "Detailed article on effective crisis response.", category: "Articles" },
        { title: "Video: Crisis Management Best Practices", content: "Video covering best practices in crisis management.", category: "Videos" },
        { title: "Case Study: Successful Crisis Management Examples", content: "Case study showcasing successful crisis management.", category: "Case Studies" },
    ];

    const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(search.toLowerCase())
    );

    const categories = [...new Set(resources.map(resource => resource.category))];

    return (
        <Card>
            <h2>Resource Library</h2>
            <SearchBox
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <CategoryList>
                {categories.map((category, index) => (
                    <Category key={index}>
                        <CategoryTitle>{category}</CategoryTitle>
                        {filteredResources
                            .filter(resource => resource.category === category)
                            .map((resource, i) => (
                                <ResourceCard key={i} onClick={() => setExpanded(expanded === i ? null : i)}>
                                    <ResourceHeader>
                                        <h3>{resource.title}</h3>
                                        {expanded === i && <ExpandIcon>-</ExpandIcon>}
                                        {expanded !== i && <ExpandIcon>+</ExpandIcon>}
                                    </ResourceHeader>
                                    {expanded === i && <p>{resource.content}</p>}
                                </ResourceCard>
                            ))}
                    </Category>
                ))}
            </CategoryList>
        </Card>
    );
};

export default UranusEducation;



const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Container = styled.div`
    background: linear-gradient(135deg, rgba(45, 86, 188, 0.8), rgba(50, 50, 50, 0.8));
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 20px;

    h1 {
        margin: 0;
        font-size: 2.5em;
        color: white;
        font-family: 'Orbitron', sans-serif;
    }

    p {
        font-size: 1.2em;
        color: white;
        font-family: 'Orbitron', sans-serif;
    }
`;

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 800px;
`;

const Tab = styled.button`
    flex: 1;
    padding: 10px 20px;
    background-color: ${props => (props.active ? '#3498db' : '#ecf0f1')};
    color: ${props => (props.active ? '#fff' : '#7f8c8d')};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-size: 1em;
    font-weight: bold;

    &:hover {
        background-color: #3498db;
        color: #fff;
    }

    &:focus {
        outline: none;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: 800px;
`;

const Card = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    animation: ${fadeIn} 0.5s ease;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    h2 {
        margin-top: 0;
        font-size: 1.5em;
        color: #2c3e50;
    }

    p {
        font-size: 1em;
        color: #34495e;
    }
`;

const TrainingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const Loading = styled.div`
    font-size: 1.5em;
    color: #3498db;
    text-align: center;
    margin-top: 20px;
`;

const SearchBox = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
`;

const ResourceList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

const ResourceItem = styled.li`
    margin-bottom: 10px;
`;

const ResourceCard = styled.div`
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ececec;
    }

    h3 {
        margin: 0;
        font-size: 1.2em;
    }

    p {
        margin: 10px 0 0;
    }
`;

const ClassList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

const ClassItem = styled.li`
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ececec;
    }

    h3 {
        margin: 0;
        font-size: 1.2em;
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    text-align: center;

    h2 {
        margin-top: 0;
    }

    p {
        margin: 10px 0;
    }

    a {
        color: #3498db;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const CloseButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }

    &:focus {
        outline: none;
    }
`;

/* Additional CSS for Resource Library enhancements */

const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
`;

const Category = styled.div`
    margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
    margin: 0 0 10px 0;
    font-size: 1.3em;
    color: #2c3e50;
`;

const ResourceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ExpandIcon = styled.span`
    font-size: 1.2em;
    cursor: pointer;
`;
