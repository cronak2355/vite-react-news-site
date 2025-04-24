import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 2560px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 4rem;
  color: #333;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: 700;
  width: 100%;
  max-width: 1800px;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  max-width: 1800px;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProjectInfo = styled.div`
  padding: 2.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.3rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-3px);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '포트폴리오 웹사이트',
      description: 'React와 Framer Motion을 활용한 개인 포트폴리오 웹사이트입니다. 모던한 UI/UX와 반응형 디자인을 구현했습니다.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'Framer Motion', 'Styled Components']
    },
    {
      id: 2,
      title: '전자상거래 플랫폼',
      description: '온라인 쇼핑몰 프로젝트입니다. 결제 시스템과 관리자 페이지를 포함하며, 실시간 재고 관리 기능을 구현했습니다.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: '소셜 미디어 앱',
      description: '사용자들이 소통할 수 있는 소셜 미디어 애플리케이션입니다. 실시간 채팅과 게시물 공유 기능을 제공합니다.',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React Native', 'Firebase', 'Redux']
    }
  ];

  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        프로젝트
      </Title>
      <ProjectsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -10 }}
          >
            <ProjectImage image={project.image} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 