import styled from '@emotion/styled';

export const TimelineHorizontalWrapper = styled.ul<{ flipLayout?: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  width: 100%;
  direction: ${(p) => (p.flipLayout ? 'rtl' : 'ltr')};

  &.vertical {
    flex-direction: column;
  }
  &.horizontal {
    flex-direction: row;
  }
`;

export const TimelineItemWrapper = styled.li<{ width: number }>`
  width: ${(p) => p.width}px;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  flex-direction: column;

  &.vertical {
    margin-bottom: 3rem;
    width: 100%;
  }

  &.visible {
    visibility: visible;
  }
`;
