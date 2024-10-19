export const Contact = () => {
    return (
        <div className={'contact'}>
            <h3>Contact Us</h3>
            <form>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" id="email" required/>
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" id="message" required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}