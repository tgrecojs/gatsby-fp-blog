import styled from '@emotion/styled';

const colors = {
  palleteOne: {
    parentBg: '#2C365E',
    color: '#F7F7F8',
    childBg: '#445492',
    border: '#181E34'
  }
};

const { palleteOne } = colors;
const { parentBg, color, childBg, border } = palleteOne;

const SiteWrapper = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'avenir';
  color: ${color};
`;

const ContentWrapper = styled('div')`
  flex: 1;
  background: ${parentBg};
  padding-top: 10px;
`;

const PostWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContent = styled('div')`
  font-family: 'avenir';
  width: 80%;
  background: ${childBg};
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid ${border};
`;

export {
  parentBg,
  color,
  childBg,
  border,
  ContentWrapper,
  SiteWrapper,
  PostWrapper,
  PostContent
};
