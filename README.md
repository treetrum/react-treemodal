# React TreeModal

Very simple modal utility component. Handles common use cases like:

-   Centered, then scrolls when content is too long
-   Escape to close
-   Click overlay to close

## Sample Usage:

```js
import TreeModal from "@treetrum/react-treemodal";

const Modal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <TreeModal
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <h1>Modal Title</h1>
            <p>
                Aliquam diam augue, hendrerit vitae orci quis, suscipit
                condimentum mi...
            </p>
        </TreeModal>
    );
};
```

## Exported Components

### TreeModal - Default Export

#### Props

| Prop Name      | Required | Type             | Default Value        |
| -------------- | -------- | ---------------- | -------------------- |
| `isOpen`       | `true`   | `boolean`        | `null`               |
| `children`     | `true`   | `React.Children` | `null`               |
| `onClose`      | `true`   | `() => void`     | `null`               |
| `overlayColor` | `false`  | `string`         | `rgba(0, 0, 0, 0.5)` |
