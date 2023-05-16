import { styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const items = [
    'Romance',
    'Action',
    'Drama',
    'Horror',
    'Comedy',
    'Thriller',
    'Fantasy',
    'Music',
    'Documentary',
  ];

  const onClick = (item: string) => {
    navigate(`/search?q=${item}`);
  };
  return (
    <Wrap>
      <Main>
        <div className="items">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                onClick={() => onClick(item)}
                className="item"
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Main>
    </Wrap>
  );
};

export default Categories;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;

  .items {
    display: flex;
    gap: 15px;
    .item {
      padding: 8px 18px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      background-color: #222;
      font-size: 15px;
      &:hover {
        background-color: #111;
      }
    }
  }
`;
