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
      {isBtn && (
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-3"
        ></button>
      }
    </form>
  );
}

export default CommonForm;
