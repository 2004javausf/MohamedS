package com.revature.driver;
import com.revature.beans.*;

public class Driver {
	public static void main(String[] args) {
		Human h = new Human();
		System.out.println(h);
		h.setAge(25);
		h.setName("Mo");
		h.setWeight(130);
		System.out.println(h);
	}
}
