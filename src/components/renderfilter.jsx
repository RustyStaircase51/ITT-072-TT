import { useState } from "react";


function RenderFilter({ onSortChange }) {
    const [selectedSort, setSelectedSort] = useState("default");

    function grabSelect() {
        onSortChange(selectedSort);
    }

    return (
        <>
            <label>
                Current Sort:
                <select
                    id="sort_button"
                    value={selectedSort}
                    onChange={(event) =>
                        setSelectedSort(event.target.value)
                    }
                >
                    <option value="default">Default</option>
                    <option value="genre">Genre</option>
                    <option value="name">Name</option>
                    <option value="status">Status</option>
                </select>
            </label>

            <button
                id="catSubmit"
                type="button"
                onClick={grabSelect}
            >
                Confirm
            </button>
        </>
    );
}

export default RenderFilter;