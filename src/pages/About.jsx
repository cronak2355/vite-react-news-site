import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 2560px;
  margin: 0 auto;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1800px;
  margin-bottom: 6rem;
`;

const Title = styled(motion.h2)`
  font-size: 4rem;
  color: #333;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  max-width: 1800px;
  margin: 0 auto;
`;

const Text = styled(motion.div)`
  font-size: 1.5rem;
  line-height: 1.8;
  color: #666;
`;

const SkillsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1800px;
  margin: 0 auto;
`;

const Skill = styled(motion.div)`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 1.3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'HTML/CSS', 'Git', 'UI/UX', 'Responsive Design', 'Next.js'
  ];

  return (
    <AboutContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text>
            안녕하세요! 저는 김태원입니다. 사용자 경험을 중요시하며,
            깔끔하고 효율적인 코드 작성을 지향합니다. 새로운 기술을 배우는 것을
            좋아하며, 팀과의 협업을 즐깁니다.
          </Text>
          <Text>
            현재까지 다양한 프로젝트를 진행해왔으며, 프론트엔드 개발에
            특별한 관심이 있습니다. 사용자 중심의 인터페이스 설계와
            최신 웹 기술을 활용한 개발을 추구합니다.
          </Text>
        </Content>
      </Section>

      <Section>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </Title>
        <SkillsList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </Skill>
          ))}
        </SkillsList>
      </Section>
    </AboutContainer>
  );
};

export default About; 