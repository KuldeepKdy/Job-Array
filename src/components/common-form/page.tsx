function CommonForm({ action, buttonText, isBtnDisabled,formControls,buttonText,isBtn }) {
  return (
    <form action={action}>
      {formControls.map((controls) => renderInputByComponentType(controls))}
      <div className="mt-6 w-full">
        <button
          type={btnType || "submit"}
          disabled={isBtnDisabled}
          className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default CommonForm;
