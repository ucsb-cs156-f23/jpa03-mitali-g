

export function onDeleteSuccess(message) {
    console.log(message);
    toast(message);
}

export function cellToAxiosParamsDelete(cell) {
    return {
        url: "/api/ucsbdates",
        method: "DELETE",
        params: {
            id: cell.row.values.id
        }
    }
}

export function editCallback(cell) {
    toast(`Edit Callback called on id: ${cell.row.values.id} name: ${cell.row.values.name}`);
}

