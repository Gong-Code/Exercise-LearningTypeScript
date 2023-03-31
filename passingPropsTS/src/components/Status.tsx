type StatusProps = {
    status: "loading" | "success" | "error";
}

export const Status = (props: StatusProps) => {
    
    let statusMessage;

    if(props.status === "loading"){
        statusMessage = "Loading...";
    }
    else if (props.status === "success"){
        statusMessage = "Data fetched successfully!";
    }
    else if (props.status === "error"){
        statusMessage = "Error fetching data";
    }

    return (
        <div>
            <h2>Status - {statusMessage}</h2>
        </div>
    )
}