import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
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

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: white;
  padding: 4rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1800px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.3rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1.2rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1.2rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  font-size: 1.3rem;
  min-height: 250px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1.5rem 3rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  margin-top: 1rem;
  
  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 123, 255, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가하세요
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        연락하기
      </Title>
      <Form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="김태원"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">메시지</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="메시지를 입력해주세요..."
          />
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          보내기
        </SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact; 