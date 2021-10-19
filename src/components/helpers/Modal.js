
import ReactDOM from 'react-dom'
import { Grommet, Box, Layer } from 'grommet';

export const Modal = (props) => {

    return ReactDOM.createPortal(
        <Grommet >
            <Layer>
                <Box
                    align="center"
                    justify="center"
                    gap="small"
                    direction="row"
                    alignSelf="center"
                    pad="large"
                >
                    {props.children}
                </Box>
            </Layer>
        </Grommet>
        ,
        document.getElementById('modal')
    );
}

Modal.parameters = {
    chromatic: { disable: false },
};
