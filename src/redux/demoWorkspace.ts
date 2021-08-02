import Block from "../Types/Block";

const demoWorkspace: Block[] = [
    {
        id: "1",
        type: 'Flow',
        position: {
            x: 100,
            y: 100
        },
        color: 'purple',
        blockHeightLines: 1,
        blockWidthLines: 3,
        previousBlockId: null,
        nextBlockId: "4",
        topBlockId: "1",
        argsLength: 0
    },
    {
        id: "3",
        type: 'Flow',
        position: {
            x: 300,
            y: 100
        },
        color: 'teal',
        previousBlockId: null,
        topBlockId: "3",
        blockHeightLines: 1,
        blockWidthLines: 3,
        nextBlockId: null,
        argsLength: 0
    },
    {
        id: "4",
        type: 'Flow',
        position: {
            x: 300,
            y: 100
        },
        color: 'teal',
        previousBlockId: "1",
        blockHeightLines: 1,
        blockWidthLines: 3,
        nextBlockId: "5",
        topBlockId: "1",
        argsLength: 0
    },
    {
        id: "5",
        type: 'Flow',
        position: {
            x: 300,
            y: 100
        },
        color: 'orange',
        previousBlockId: "4",
        blockHeightLines: 1,
        blockWidthLines: 3,
        topBlockId: "1",
        argsLength: 0,
        nextBlockId: null
    },
    {
        id: "8",
        type: 'Flow',
        position: {
            x: 400,
            y: 150
        },
        color: 'blue',
        previousBlockId: null,
        blockHeightLines: 1,
        blockWidthLines: 3,
        topBlockId: "8",
        argsLength: 0,
        nextBlockId: null
    },
    {
        id: "9",
        type: 'Flow',
        position: {
            x: 500,
            y: 300
        },
        color: 'yellow',
        previousBlockId: null,
        blockHeightLines: 1,
        blockWidthLines: 3,
        topBlockId: "9",
        argsLength: 0,
        nextBlockId: null
    },
    {
        id: "10",
        type: 'Flow',
        position: {
            x: 600,
            y: 600
        },
        color: 'pink',
        previousBlockId: null,
        blockHeightLines: 1,
        blockWidthLines: 3,
        topBlockId: "10",
        argsLength: 0,
        nextBlockId: null
    },
    {
        id: "11",
        type: 'FlowClamp',
        position: {
            x: 700,
            y: 700
        },
        color: 'pink',
        previousBlockId: null,
        blockHeightLines: 3,
        blockWidthLines: 4,
        topBlockId: "10",
        argsLength: 0,
        nextBlockId: null
    }

]

export const loadWorkSpace = () => {
    const workspace: {[id: string]: Block} = {};
    demoWorkspace.forEach(block => workspace[block.id] = block);
    return workspace
}
