import Header from '../../components/Header/Header';
import styles from './Dashboard.module.scss';
import { Button } from 'ui';

const Dashboard = () => {
    // const boards = useLiveQuery(() => database.boards.toArray());

    // const currentBoardId = useAppSelector(
    //     (state) => state.board.currentBoardId
    // );

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const fetchBoards = async () => {
    //         const boards = await database.boards?.toArray();

    //         if (boards?.length) {
    //             dispatch(
    //                 setCurrentBoardId(boards[boards.length - 1].id as number)
    //             );
    //             dispatch(setCurrentBoardTitle(boards[boards.length - 1].title));
    //         }
    //     };

    //     fetchBoards();
    // }, [boards]);

    return (
        <div>
            <h1>Dashboard</h1>

            <div className={styles.app}>
                {/* <BackgroundLayer /> */}
                <Header />
                {/* {currentBoa rdId ? <Board /> : <NoBoardScreen />} */}
                <div className={styles['app__body']}>
                    <Button variant="primary" form='contained'>BTN</Button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
