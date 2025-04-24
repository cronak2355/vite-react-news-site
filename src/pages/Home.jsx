import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 4rem;
  max-width: 2560px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  max-width: 1800px;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: 2.5rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.4;
`;

const CTAButton = styled(motion.button)`
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.2);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          안녕하세요, 저는 김태원입니다
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          웹 개발자 & 디자이너
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          프로젝트 보기
        </CTAButton>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home; 