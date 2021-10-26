import Header from "./Header"
import renderer from 'react-test-renderer';


describe("Snapshot test on Header Component", () => {
    test('render Header correctly', () => {
        const tree = renderer.create(<Header/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})