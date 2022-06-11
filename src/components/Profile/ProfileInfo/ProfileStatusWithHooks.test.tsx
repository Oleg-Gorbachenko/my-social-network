import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import TestRenderer, {create} from 'react-test-renderer';
import React from "react";

const testStatusStr = 'Test status';

describe('Profile status component', () => {
    test('Status from props should be in state', () => {
        const component = TestRenderer.create(<ProfileStatusWithHooks
            status={testStatusStr} updateStatus={() => {
        }}/>);
        //@ts-ignore
        let statusInSpan = component.toJSON().children[1].children[0]
        expect(statusInSpan).toBe(testStatusStr)
    });
    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatusWithHooks status={testStatusStr} updateStatus={() => {
        }}/>);
        const root = component.root;
        expect(() => {root.findByType('span')}).toThrow();
    });
    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatusWithHooks status={testStatusStr} updateStatus={() => {
        }}/>);
        const root = component.root;
        expect(() => {root.findByType('input')}).toThrow();
    });
});