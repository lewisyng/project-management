import styles from './SelectBoardModal.module.scss';
import cs from 'classnames';
import BaseModal from '../Modal/BaseModal';
import Button from '../UI/Button/Button';

export const SelectBoardModal = ({
    open,
    handleClose,
    className,
}: {
    open: boolean;
    handleClose: () => void;
    className?: string;
}) => {
    // const currentBoardId = useAppSelector(
    //     (state: any) => state.board.currentBoardId
    // );
    // const dispatch = useAppDispatch();

    // const boards = useLiveQuery(() => database.boards.toArray());

    // const handleClick = (id: number) => {
    //     dispatch(setCurrentBoardId(id));
    //     const boardTitle = boards?.find(
    //         (board: Board) => board.id === id
    //     )?.title;

    //     if (boardTitle) {
    //         dispatch(setCurrentBoardTitle(boardTitle));
    //     }
    // };

    // const boardIsCurrent = (currentBoard: number, boardId: number) =>
    //     currentBoard === boardId;

    return (
        <BaseModal open={open} onClose={handleClose} title="Select a board">
            {/* <div className={styles.boardTiles}>
                {boards &&
                    boards.map((board: Board, idx: number) => (
                        <div
                            key={idx}
                            className={cs(
                                styles.boardTile,
                                boardIsCurrent(currentBoardId!, board.id!) &&
                                    styles.boardTile__selected
                            )}
                            onClick={() => handleClick(board.id as number)}
                        >
                            <Typography
                                size="text-sm"
                                weight={
                                    boardIsCurrent(currentBoardId!, board.id!)
                                        ? 'bold'
                                        : 'normal'
                                }
                                uppercase
                            >
                                {board.title}
                            </Typography>
                        </div>
                    ))}
            </div> */}

            <Button variant="warning" onClick={handleClose}>
                Abbrechen
            </Button>
        </BaseModal>
    );
};

export default SelectBoardModal;
