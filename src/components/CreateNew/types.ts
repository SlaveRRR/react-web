export interface IForm {
   username: string;
   comment: string;
   picture: FileList;
}

export interface IValidateStatus {
   success: "green";
   error: "red";
   default: "#d9d9d9";
}

export interface IStyledProps {
   status: keyof IValidateStatus;
}
