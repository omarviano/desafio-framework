import styled from 'styled-components';
import { DraggableStateSnapshot } from 'react-beautiful-dnd';
import colors from 'styles/colors';

interface DragItemProps {
  snapshot: DraggableStateSnapshot;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;

export const Column = styled.div`
  padding: 32px;
  border-radius: 6px;
  background: ${colors.gray};
`;

export const ColumnHeader = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
`;

export const DroppableContainer = styled.div`
  padding: 24px 0;
`;

export const DragItem = styled.div<DragItemProps>`
  padding: 20px;
  border-radius: 6px;
  background: ${colors.primary};
  color: ${colors.white};
  font-weight: 600;

  & + div {
    margin-top: 40px;
  }
`;
